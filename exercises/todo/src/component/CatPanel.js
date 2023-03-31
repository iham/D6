import React from 'react';
import ReactECharts from 'echarts-for-react';  // or var ReactECharts = require('echarts-for-react');


const CatPanel = props => {
    const {taskService} = props;
    const tasks = taskService.getTaskList();
    const categories = taskService.getKategorien().map(c => {
        let v = tasks.filter(v => v.kategorie === c).reduce((acc, v) => acc + 1, 0);
        return {name: `${c} (${v})`, value: v};
    });
    const options = {
        series: [
          {
            data: categories,
            type: "pie",
            smooth: true
          }
        ],
      }
    return (
        <>
            <h2>CatPanel</h2>
            <ReactECharts
                option={options}
                notMerge={true}
                lazyUpdate={true}
            />
        </>
    )
};

export default CatPanel;