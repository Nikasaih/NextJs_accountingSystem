import { Formik } from "formik";
import { useContext } from "react";
import { AppContext } from "../../components/ContextWrapper.js";

export default function AddCount() {
  const { data, addData } = useContext(AppContext);
  const formAddCount = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="count"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.count}
        />
        {errors.count && touched.count && errors.count}

        <input
          type="text"
          name="justification"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.justification}
        />
        {errors.justification && touched.justification && errors.justification}

        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <div>
      <h1>add count</h1>
      <Formik
        initialValues={{ count: "", justification: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.count) {
            errors.count = "Required";
          } else if (/^[+-][0-9]+$/i.test(values.count)) {
            errors.count = "invalid count ";
          }
          console.log(data);
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          addData([...data, values]);
          //save values
        }}
      >
        {formAddCount}
      </Formik>
    </div>
  );
}
