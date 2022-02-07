import { useContext } from "react"
import { AppContext } from "./ContextWrapper.js"
import styles from "../styles/displayData.module.css"

const DisplayDataInRow = (props) => {
  const { element, ...otherProps } = props

  return (
    <tr {...otherProps}>
      <th>
        {element.state === "earn" ? (
          <>
            + {element.count}$
            <p className={styles.justification}>{element.justification}</p>
          </>
        ) : null}
      </th>
      <th>
        {element.state === "loose" ? (
          <>
            - {element.count}$
            <p className={styles.justification}>{element.justification}</p>
          </>
        ) : null}
      </th>
    </tr>
  )
}

const DisplayDataInTable = (props) => {
  const { data, ...otherProps } = props
  let earn = 0
  let loose = 0
  const selectColorOnType = (type) => {
    const response = type === "earn" ? styles.earn : styles.loose

    return response
  }

  return (
    <table props={otherProps} className={styles.table}>
      <thead>
        <tr className={styles.borderBlack}>
          <th scope="col" className={styles.XLarge}>
            Income
          </th>
          <th scope="col" className={styles.XLarge}>
            Outcome
          </th>
        </tr>
      </thead>

      <tbody>
        {data
          ? data.map((e, index) => {
              if (e.state === "earn") {
                earn += parseInt(e.count)
              } else {
                loose += parseInt(e.count)
              }

              const colorAndSize = `${selectColorOnType(e.state)} ${
                styles.XLarge
              } ${styles.borderBlack}`

              return (
                <DisplayDataInRow
                  key={index}
                  className={`${
                    index % 2 ? styles.lightGray : ""
                  } ${colorAndSize}`}
                  element={e}
                />
              )
            })
          : null}
      </tbody>

      <tfoot>
        <tr>
          <th
            className={`${styles.earn} ${styles.XLarge} ${styles.borderBlack}`}
          >
            Totals earn : {earn}$
          </th>

          <th
            className={`${styles.loose} ${styles.XLarge} ${styles.borderBlack} `}
          >
            Totals loose : {loose}$
          </th>
        </tr>
        <tr>
          <th
            className={`${earn - loose > 0 ? styles.earn : styles.loose} ${
              styles.XLarge
            } ${styles.borderBlack}`}
          >
            Current money : {earn - loose}$
          </th>
        </tr>
      </tfoot>
    </table>
  )
}

export default function DisplayData() {
  const { data } = useContext(AppContext)

  return (
    <div>
      <DisplayDataInTable data={data} />
    </div>
  )
}
