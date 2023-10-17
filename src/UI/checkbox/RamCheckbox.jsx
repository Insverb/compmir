import { Formik, Field, Form } from 'formik';


const RamCheckbox = (props) => (
  <div>
    <Formik
      initialValues={{
        ram: 'all',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form {...props}>
            <div className='flex flex-col' role="group" aria-labelledby="my-radio-group">
                <label>
                <Field type="radio" name="ram" value="all" />
                All
                </label>
                <label>
                <Field type="radio" name="ram" value="16" />
                16 Gb
                </label>
                <label>
                <Field type="radio" name="ram" value="32" />
                32 Gb
                </label>
            </div>
          <div>Picked: {values.ram}</div>
        </Form>
      )}
    </Formik>
  </div>
);

export default RamCheckbox;