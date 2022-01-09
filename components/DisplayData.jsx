import { useContext } from "react"
import { AppContext } from "./ContextWrapper.js"
import cn from "classnames"
import styles from "../styles/earnOrLoose.module.css"

const EachInOutCome = (props) => {
  const { data, ...otherProps } = props
  let earn = 0
  let loose = 0
  const selectColorOnType = (type) => {
    const response = type === "earn" ? styles.earn : styles.loose
    return response
  }

  return (
    <table props={otherProps}>
      <thead>
        <tr>
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
          ? data.map((e) => {
              let currentCountState = e.state
              if (e.state === "earn") {
                earn += parseInt(e.count)
              } else {
                loose += parseInt(e.count)
              }
              const colorAndSize = `${selectColorOnType(currentCountState)} ${
                styles.XLarge
              } ${styles.thborder}`
              return (
                <tr key={e.id}>
                  <th className={colorAndSize}>
                    {currentCountState === "earn" ? (
                      <>
                        + {e.count}$
                        <p className={styles.justification}>
                          {e.justification}
                        </p>
                      </>
                    ) : null}
                  </th>
                  <th className={colorAndSize}>
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
          <th className={`${styles.earn} ${styles.XLarge} ${styles.thborder}`}>
            Totals earn : {earn}$
          </th>

          <th
            className={`${styles.loose} ${styles.XLarge} ${styles.thborder} `}
          >
            Totals loose : {loose}$
          </th>
        </tr>
        <tr>
          <th
            className={`${earn - loose > 0 ? styles.earn : styles.loose} ${
              styles.XLarge
            } ${styles.thborder}`}
          >
            Current money : {earn - loose}$
          </th>
        </tr>
      </tfoot>
    </table>
  )
}

export default function DisplayData({ children, props }) {
  const { data } = useContext(AppContext)

  return (
    <div>
      <EachInOutCome data={data} />
    </div>
  )
}
