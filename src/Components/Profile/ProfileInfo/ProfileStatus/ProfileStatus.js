import React from "react"
class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: "Yura"
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditeMode = () => {
        this.setState({
            editMode: false
        })
    }

    onChangeStatus = (e) => {
        let newText = e.currentTarget.value
        this.setState({
            title: newText
        })

    }

    render () {
        return (
            <div>
                {this.state.editMode?
                    <input
                        value={this.state.title}
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