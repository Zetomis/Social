import moment from "moment";

const convertDateTime = (date: Date) => {
    return moment(date).format("MMMM Do YYYY, h:mm:ss a");
};

export default convertDateTime;
