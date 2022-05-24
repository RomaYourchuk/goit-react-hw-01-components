import PropTypes from 'prop-types';


function Statistics({ title, stats }) {
    return (
      <section>
        {title && <h2>{title}</h2>}
        <ul>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id}>
                <span>{label} </span>
                <span>{percentage} %</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
}
  
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
};
  
export default Statistics;



// export default function Statistics({title, stats}) {
//     return (<section>
//     <h2>Upload stats{title}</h2>
//     <ul class="stat-list">
//         {stats.map(({id, label, percentage}) => { 
//     return (
//       <li key={id}>
//         <span>{label}</span>
//         <span>{percentage}</span>
//       </li>)})};
//     </ul>
//   </section>)
// }

// Statistics.PropTypes = {
// label: PropTypes.string,
// }