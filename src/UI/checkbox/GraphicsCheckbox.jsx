import { Formik, Field, Form } from 'formik';


const GraphicsCheckbox = (props) => (
  <div>
    <Formik
      initialValues={{
        graphicsCard: 'all',
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
                <Field type="radio" name="graphicsCard" value="all" />
                All
                </label>
                <label>
                <Field type="radio" name="graphicsCard" value="4070" />
                Nvidia GeForce RTX 4070
                </label>
                <label>
                <Field type="radio" name="graphicsCard" value="4080" />
                Nvidia GeForce RTX 4080
                </label>
                <label>
                <Field type="radio" name="graphicsCard" value="4080ti" />
                Nvidia GeForce RTX 4080 ti
                </label>
                <label>
                <Field type="radio" name="graphicsCard" value="4090" />
                Nvidia GeForce RTX 4090
                </label>
                <label>
                <Field type="radio" name="graphicsCard" value="4090ti" />
                Nvidia GeForce RTX 4090 ti
                </label>
            </div>
          <div>Picked: {values.graphicsCard}</div>
        </Form>
      )}
    </Formik>
  </div>
);

export default GraphicsCheckbox;