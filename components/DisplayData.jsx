import { useContext } from "react";
import { AppContext } from "./ContextWrapper.js";

const EachInOutCome = (props) => {
  const { data, ...otherProps } = props;
  let earn = 0;
  let loose = 0;
  return (
    <table props={otherProps}>
      <thead>
        <tr>
          <th scope="col">Income</th>
          <th scope="col">Outcome</th>
          <th scope="col">Justification</th>
        </tr>
      </thead>
      <tbody>
        {data
          ? data.map((e) => {
              let t;
              if (e.state === "pos") {
                t = { positive: e.count };
                earn += parseInt(e.count);
              } else {
                t = { negative: e.count };
                loose += parseInt(e.count);
              }

              return (
                <tr key={e.id}>
                  <th bgcolor={t.positive ? `green` : null}>
                    {t.positive ? `+ ${t.positive}$` : null}
                  </th>
                  <th bgcolor={t.negative ? `red` : null}>
                    {t.negative ? `- ${t.negative}$` : null}
                  </th>
                  <th>{e.justification}</th>
                </tr>
              );
            })
          : null}
      </tbody>
      <tfoot>
        <tr>
          <th bgcolor="green">Totals Earn {earn}$</th>

          <th bgcolor="red"> Totals Loose {loose}$</th>
        </tr>
        <tr>
          <th bgcolor={earn - loose > 0 ? "green" : "red"}>
            current Money {earn - loose}
          </th>
        </tr>
      </tfoot>
    </table>
  );
};

export default function DisplayData({ children, props }) {
  const { data } = useContext(AppContext);

  return (
    <div>
      <EachInOutCome data={data} />
    </div>
  );
}
