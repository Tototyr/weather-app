import styles from './Error.module.css';

const Error = ({ message }) => (
    <div className={`${styles.error} alert position-absolute`} role="alert">
        {message}
    </div>
);

export default Error;
