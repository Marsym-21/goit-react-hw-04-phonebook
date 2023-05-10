import { useMemo } from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';
const Contacts = ({ contacts, filter, onClick }) => {
  const visibleContacts = useMemo(() => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ dataName }) =>
      dataName.toLowerCase().includes(normalizeFilter)
    );
  }, [contacts, filter]);

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, dataName, dataNumber }) => (
        <li className={css.item} key={id}>
          &#10003; {dataName}: {dataNumber}{' '}
          <button
            className={css.contact_btn}
            type="submit"
            id={id}
            onClick={onClick}
          >
            Delet
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contacts;
