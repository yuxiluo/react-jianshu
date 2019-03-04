// 对reducer进行拆分再组合
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer }  from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as articleReducer } from '../common/articleList/store';
import { reducer as authorReducer } from '../pages/recommendList/store';

// 推荐作者
import { reducer as recommendReducer } from '../common/recommend/store';

const reducer = combineReducers({
    login: loginReducer,
    header: headerReducer,
    home: homeReducer,
    articleList: articleReducer,
    detail: detailReducer,
    recommend: recommendReducer,
    recommendAuthor: authorReducer
});

export default reducer;