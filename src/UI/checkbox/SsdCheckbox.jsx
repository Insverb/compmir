import { Formik, Field, Form } from 'formik';


const SsdCheckbox = (props) => (
  <div>
    <Formik
      initialValues={{
        picked: 'all',
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
                <Field type="radio" name="picked" value="all" />
                All
                </label>
                <label>
                <Field type="radio" name="picked" value="1tb" />
                2 Tb
                </label>
                <label>
                <Field type="radio" name="picked" value="2tb" />
                1 Tb
                </label>
            </div>
          <div>Picked: {values.picked}</div>
        </Form>
      )}
    </Formik>
  </div>
);

export default SsdCheckbox;