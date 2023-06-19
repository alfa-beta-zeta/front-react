import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    rowInner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: theme.spacing(8),
    },
    sideCol: {
        display: 'flex',
        flexDirection: 'column',
    },
    showcaseTitle: {
        marginBottom: theme.spacing(4),
    },
    descriptionText: {
        marginBottom: theme.spacing(2),
    },
    sectionLink: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        color: theme.palette.text.primary,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.main,
        },
        '& i': {
            marginRight: theme.spacing(1),
        },
    },
    previewContainer: {
        width: '100%',
        height: '575px',
    },
}));

const ResultNational = () => {
    const classes = useStyles();

    return (
        <Box className={classes.rowInner}>
            <Box className={classes.sideCol}>
                <div className={classes.showcaseTitle}>
                    <Typography variant="h4">Election results chart</Typography>
                </div>
                <div className={classes.description}>
                    <div className={classes.descriptionText}>
                        <Typography>A stacked bar chart ideal for election results. Includes a coalition builder feature</Typography>
                    </div>
                    <Typography variant="subtitle1">
                        Updated 20 days ago to v8.0.2 by <a href="/@flourish">Flourish team</a>
                    </Typography>
                </div>
                <div className={classes.sectionLinks}>
                    <a className={classes.sectionLink} href="#guide">
                        <i className="fa fa-book"></i> How to use this template
                    </a>
                    <a className={classes.sectionLink} href="#api">
                        <i className="fa fa-code"></i> API docs
                    </a>
                </div>
            </Box>
            <div className={classes.previewContainer}>
                <Container>
                    <div className="flourish-embed" data-src="template/10974">
                        <script data-ot-ignore="" src="https://public.flourish.studio/resources/embed.js"></script>
                        <iframe
                            scrolling="no"
                            frameBorder="0"
                            title="Interactive or visual content"
                            sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                            src="https://app.flourish.studio/template/10974/preview?auto=1"
                            className={classes.previewContainer}
                        ></iframe>
                    </div>
                </Container>
            </div>
        </Box>
    );
};

export default ResultNational;
