import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        '& .MuiAppBar-root': {
            display: 'flex',
            flexDirection: 'row'
        }
    },
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: 'rgba(0,183,255, 1)'
    },
    image: {
        marginLeft: '15px'
    }
})
);

export default useStyles;


