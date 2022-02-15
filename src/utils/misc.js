export const handleResponse = ({ success, ...rest }) => ({ success, ...rest });

export const phoneScreen = window.innerWidth < 425;
