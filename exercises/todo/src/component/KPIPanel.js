import React from 'react';
import ReactECharts from 'echarts-for-react';  // or var ReactECharts = require('echarts-for-react');


const KPIPanel = props => {
    const {taskService} = props;
    const tasks = taskService.getTaskList();
    const done = tasks.filter(v => v.done).reduce((acc, v) => acc + 1, 0);
    const open = tasks.length - done;

    const options = {
        color: ["green", "red"],
        series: [
          {
            data: [
                {value: done, name:`Erledigt (${done})`},
                {value: open, name:`Offen (${open})`},
            ],
            type: "pie",
            smooth: true
          }
        ],
      }
    return (
        <>
            <h2>KPIPanel</h2>
            <ReactECharts
                option={options}
                notMerge={true}
                lazyUpdate={true}
            />

        </>
    )
};

export default KPIPanel;