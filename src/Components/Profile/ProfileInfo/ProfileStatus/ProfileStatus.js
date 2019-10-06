import React from "react"
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

    render () {
        return (
            <div>
                {this.state.editMode?
                    <input
                        value={this.state.status}
                        onBlur={this.deactivateEditeMode}
                        autoFocus={true}
                        onChange={this.onChangeStatus}
                    />
                :<span onDoubleClick={this.onEditMode}>{this.props.status}</span>}
            </div>
        )
    }
}
export default ProfileStatus