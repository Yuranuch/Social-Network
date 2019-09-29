import React from 'react';

import {connect} from "react-redux";
import {addNewPost, changePostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        firstPostValue: state.profilePage.firstPostValue,
        nextPostId: state.profilePage.nextPostId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost : () => {
          dispatch(addNewPost())
        },
        changePostText: (newText)=> {
            dispatch(changePostText(newText))
        }
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(MyPosts)



