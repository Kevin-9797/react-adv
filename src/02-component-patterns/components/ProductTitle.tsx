import styles from '../styles/styles.module.css'



export const ProductTitle = ( { title }: { title?: string } ) => {


    return (
        <span className={ styles.productDescription } > {title} </span>

    )

}