import React, {useContext, useState} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

const Search = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = event => {
    if(event.key !== 'Enter') {
      return;
    };

    github.clearUsers();

    if(value.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show('ENTER USER DATES!');
    };
  };

  return (
    <div className='form-group'>
      <input
        type="text"
        className="form-control"
        placeholder="Enter username..."
        onKeyPress={onSubmit}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
};

export default Search;