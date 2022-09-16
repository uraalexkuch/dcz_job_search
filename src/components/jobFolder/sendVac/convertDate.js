import moment from 'moment';

const convertDate = ISOdate => {
  let convertedDate;
  const date = new Date(ISOdate);
  const dateNow = new Date();
  const diffTime = Math.abs(date - dateNow);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // If last post is more than 3 days old, show full date
  if (diffDays > 0) {
    const year = date.getFullYear();
    let month = date.toLocaleString('uk-UA', {
      month: 'numeric',
    });
    month = month.charAt(0).toUpperCase() + month.slice(1);
    let day = date.getDate();
    // Add zero to days
    if (day < 10) {
      day = '0' + day;
    }
    convertedDate = `${day}. ${month}. ${year}`;
  } else {
    convertedDate = moment(date).fromNow();
  }

  return convertedDate;
};

export default convertDate;
