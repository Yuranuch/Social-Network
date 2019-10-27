import React from "react"
import {connect} from "react-redux"
import {addNewPost} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        firstPostValue: state.profilePage.firstPostValue,
        nextPostId: state.profilePage.nextPostId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostText) => {
            dispatch(addNewPost(newPostText))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)



