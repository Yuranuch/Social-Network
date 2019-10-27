import React from "react"
import styles from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditeMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        let newStatus = e.currentTarget.value
        this.setState({
            status: newStatus
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={styles.statusItem}>
                {this.state.editMode ?
                    <input
                        value={this.state.status}
                        onBlur={this.deactivateEditeMode}
                        autoFocus={true}
                        onChange={this.onChangeStatus}
                    />
                    : <div><span className={styles.status} onDoubleClick={this.onEditMode}>{this.props.status}</span>
                        <span className={styles.hint}> - double click to change status</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus