import PropTypes from 'prop-types';
import s from './statistics.module.css';


function Statistics({ title, stats }) {
    return (
      <section>
        {title && <h2 className={s.upload}>{title}</h2>}
        <ul className={s.upload_list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li className={s.upload_item} key={id}>
                <span>{label} : </span>
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
