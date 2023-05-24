import Cart from "../Components/Сart/Cart";
import Form from "../Components/Form/Form";
import styles from './page.module.scss';

export default function Page() {
    return (
        <section className={styles.wrapper}>
            <Form />
            <Cart />
        </section>
    );
}