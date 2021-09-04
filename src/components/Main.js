import React from 'react'
import styles from "./boxStyles.module.css"


const Main = props => {
    return (
        <div className={styles.mainBox}>
            <div className="d-flex flex-row">
                {props.children[0]}
                {props.children[1]}
                {props.children[2]}
            </div>
            {props.children[3]}
        </div>
    )
}

export default Main
