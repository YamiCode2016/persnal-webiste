// import { SocialAction } from '../actions/socialAction'

// const initState = {
//   socials: [
//     {
//       name: 'facebook',
//       icon: 'fa fa-facebook',
//       linkText: 'Facebook.com/yamitemplate',
//       link: 'Facebook.com/yamitemplate'
//     },
//     {
//       name: 'google',
//       icon: 'fa fa-google-plus',
//       linkText: 'yami template',
//       link: 'yami template'
//     },
//     {
//       name: 'linkedin',
//       icon: 'fa fa-linkedin',
//       linkText: 'linkedin.com/yamitemplate',
//       link: 'linkedin.com/yamitemplate'
//     }
//   ],
//   test: []
// }
// const socialReducer = (store = initState, action) => {
//   switch (action.type) {
//     case SocialAction.DELETE_SOCIAL:
//       const newSocials = store.socials.filter(item => item.name !== action.id)
//       return {
//         ...store,
//         socials: newSocials
//       }
//     case SocialAction.GET_SOCIAL:
//     console.log(action)
//       return {
//         ...store,
//         test: action.payload
//       }
//     default:
//       return store
//   }
// }

// export default socialReducer
