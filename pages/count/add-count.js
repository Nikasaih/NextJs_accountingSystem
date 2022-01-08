import { Formik } from "formik";
import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { AppContext } from "../../components/ContextWrapper.js";

export default function AddCount() {
  const { data, addData } = useContext(AppContext);
  const [state, setState] = useState("pos");
  const toggleState = () => {
    state === "pos" ? setState("neg") : setState("pos");
  };
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
        <button onClick={toggleState}>
          {state === "pos" ? "Income" : "Outcome"}
        </button>
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
          } else if (!/^[0-9]+$/i.test(values.count)) {
            errors.count = "invalid count ";
          } else if (values.count == 0) {
            errors.count = "Attention 0 n'est pas autorisé";
          }
          console.log(errors.count);
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          addData(values, state);
          resetForm({ values: "" });
        }}
      >
        {formAddCount}
      </Formik>
    </div>
  );
}
