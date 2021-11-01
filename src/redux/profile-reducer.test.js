import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    posts : [
        {
            id: 1,
            message: 'Привет как дела',
            likes: 0
        },
        {
            id: 2,
            message: 'Это мой пост',
            likes: 9
        },
    ],
};

test('New post added', () => {

    let action = addPostActionCreator('test post');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe('test post');
});