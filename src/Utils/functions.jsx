export const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "p.m." : "a.m.";
  
    hours = hours % 12 || 12; // Convert hours to 12-hour format
  
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${amOrPm}`;
  };

  export const formatDate = (date) => {
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    return `${day} ${monthNames[monthIndex]} ${year}`;
  };