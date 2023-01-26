export default () => {
    const date_time = new Date();
    const year = date_time.getFullYear();
    const month = parseInt(("0" + (date_time.getMonth() + 1)).slice(-2));
    const day = parseInt(("0" + date_time.getDate()).slice(-2));
    const hours = date_time.getHours();
    const minutes = date_time.getMinutes();
    const seconds = date_time.getSeconds();
    return({year, month, day, hours, minutes, seconds})
};