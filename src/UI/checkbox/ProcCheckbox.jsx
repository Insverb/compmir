 import { Formik, Field, Form } from 'formik';


const ProcCheckbox = (props) => (
  <div>
    <Formik
      initialValues={{
        processor: 'all',
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
                <Field type="radio" name="processor" value="all" />
                All
                </label>
                <label>
                <Field type="radio" name="processor" value="i5" />
                Intel Core i5
                </label>
                <label>
                <Field type="radio" name="processor" value="i7" />
                Intel Core i7
                </label>
                <label>
                <Field type="radio" name="processor" value="i9" />
                Intel Core i9
                </label>
            </div>
          <div>Picked: {values.processor}</div>
        </Form>
      )}
    </Formik>
  </div>
);

export default ProcCheckbox;