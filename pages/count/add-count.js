import { Formik } from "formik"
import { useContext, useState } from "react"
import { AppContext } from "../../components/ContextWrapper.js"
import styles from "../../styles/earnOrLoose.module.css"

export default function AddCount() {
  const { data, addData } = useContext(AppContext)
  const [state, setState] = useState("earn")
  const toggleState = () => {
    state === "earn" ? setState("loose") : setState("earn")
  }
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
      <form onSubmit={handleSubmit} className={styles.centered}>
        <input
          type="text"
          name="count"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.count}
          className={`${styles.XLarge} ${styles.formContent} `}
        />
        {errors.count && touched.count && errors.count}
        <input
          type="button"
          onClick={toggleState}
          value={state === "earn" ? "Income" : "Outcome"}
          className={`${state === "earn" ? styles.earn : styles.loose} ${
            styles.formContent
          } ${styles.XLarge}`}
        />

        <input
          type="text"
          name="justification"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.justification}
          className={`${styles.XLarge} ${styles.formContent}`}
        />
        {errors.justification && touched.justification && errors.justification}
        <button
          type="submit"
          className={`${styles.XLarge} ${styles.formContent}`}
        >
          Submit
        </button>
      </form>
    )
  }

  return (
    <div>
      <h1 className={styles.centered}>Add count</h1>
      <Formik
        initialValues={{ count: "", justification: "" }}
        validate={(values) => {
          const errors = {}
          if (!values.count) {
            errors.count = "Required"
          } else if (!/^[0-9]+$/i.test(values.count)) {
            errors.count = "invalid count "
          } else if (values.count == 0) {
            errors.count = "Attention 0 n'est pas autorisé"
          }
          return errors
        }}
        onSubmit={(values, { resetForm }) => {
          addData(values, state)
          resetForm({ values: "" })
        }}
      >
        {formAddCount}
      </Formik>
    </div>
  )
}
