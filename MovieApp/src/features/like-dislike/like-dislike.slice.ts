import { createSlice } from '@reduxjs/toolkit';
import { cardArray } from '../../arrayData';

type Payload = {
    postId: number;
}

type Rating = {likes:number, dislikes:number, userChoice: 'like' | 'dislike' | null}

const objRemoveMe = cardArray.reduce((accumulator, value, index) => {
    return {
      ...accumulator,
      [value.id]: {
        likes: value.like,
        dislikes: value.dislike,
        userChoice: value.user_choise,
      } as Rating,
    };
  }, {});

const likeDislike = createSlice(
    {
        name: 'likeDislike',
        initialState: objRemoveMe as Record<number, Rating>,
        reducers: {
            like(state, action: {payload: Payload}){
                const data = state[action.payload.postId];
                if(!data) return;
                if(data.userChoice==='like'){
                    data.likes--; data.userChoice = null; return;
                }
                if(data.userChoice==='dislike'){
                    data.dislikes--;
                }
                data.likes++;
                data.userChoice = 'like';
            },

            dislike(state, action: {payload: Payload}){
                const data = state[action.payload.postId];
                if(!data) return;
                if (data.userChoice==='dislike') {
                    data.dislikes--;
                    data.userChoice = null;
                    return;
                  }
                if(data.userChoice==='like'){
                    data.likes--;
                }
                data.dislikes++;
                data.userChoice = 'dislike';
            }
        }
    }
)

export const {
    actions: { like, dislike },
    reducer: likeDislikeReducer,
  } = likeDislike;