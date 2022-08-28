//layout
import { HeaderOnly } from '~/components/Layout';
//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//publicRoutes
const publicRoutes = [
    { path: '/', components: Home },
    { path: '/following', components: Following },
    { path: '/@:nickname', components: Profile },
    { path: '/upload', components: Upload, layout: HeaderOnly },
    { path: '/search', components: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
