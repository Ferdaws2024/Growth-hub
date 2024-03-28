import moment from "moment";

const formatDate = (unixTimestamp) => {

    // Convert Unix timestamp to Date object
    const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

    // Format date using Moment.js
    const formattedDate = moment(date).format('MMM/DD').toUpperCase();
    return formattedDate

}

export {
    formatDate
}