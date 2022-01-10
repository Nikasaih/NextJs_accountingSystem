import { useContext } from "react"
import { AppContext } from "./ContextWrapper.js"
import styles from "../styles/displayData.module.css"

const EachInOutCome = (props) => {
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
              let currentCountState = e.state

              if (e.state === "earn") {
                earn += parseInt(e.count)
              } else {
                loose += parseInt(e.count)
              }

              const colorAndSize = `${selectColorOnType(currentCountState)} ${
                styles.XLarge
              } ${styles.borderBlack}`

              return (
                <tr
                  key={index}
                  className={`${
                    index % 2 ? styles.lightGray : ""
                  } ${colorAndSize}`}
                >
                  <th>
                    {currentCountState === "earn" ? (
                      <>
                        + {e.count}$
                        <p className={styles.justification}>
                          {e.justification}
                        </p>
                      </>
                    ) : null}
                  </th>
                  <th>
                    {currentCountState === "loose" ? (
                      <>
                        + {e.count}$
                        <p className={styles.justification}>
                          {e.justification}
                        </p>
                      </>
                    ) : null}
                  </th>
                </tr>
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
      <EachInOutCome data={data} />
    </div>
  )
}
