import React, {Component} from 'react';
import {
    DefaultLinkFactory,
    DefaultNodeFactory,
    DefaultNodeModel, DefaultPortModel,
    DiagramEngine,
    DiagramModel, DiagramWidget, LinkModel
} from "storm-react-diagrams";
import {makeStyles} from "@material-ui/styles";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import classnames from "classnames";
import {ErrorOutline, ExpandMore, InfoOutlined, Slideshow} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import moment from "jalali-moment";

const data = [{
    FlowElementType: "EVENT",
    Status: "تکمیل شده",
    CreationDate: "2019-04-28 11:52",
    IsOverdue: "انجام شده",
    ActivityId: "EVT2289173336616",
    WICompletionDate: "2019-04-28T11:52:19+0430",
    WIState: "completion",
    EvalPoint: "completion",
    Participants: "",
    ActivityLabel: "شروع",
    ActivityLoopCnt: 0,
    RetryCount: "",
    ActivityLeadTime: "",
    Outcome: "",
    WICreationDate: "2019-04-28T11:52:19+0430",
    CompletionDate: "2019-04-28T11:52:19+0430"
}
    , {
        FlowElementType: "ACTIVITY",
        Status: "در حال پیشرفت",
        CreationDate: "2019-04-28 11:52",
        IsOverdue: "انجام شده",
        ActivityId: "USER_TASK_1530509659290",
        WICompletionDate: "",
        WIState: "activation",
        EvalPoint: "activation",
        Participants: "رضوان قيصريهاي نجف آبادي",
        ActivityLabel: "ثبت درخواست",
        ActivityLoopCnt: 0,
        RetryCount: "",
        ActivityLeadTime: "22زمان 34 دقیقه 56 ثانیه ",
        "Outcome": "",
        WICreationDate: "2019-04-28T11:52:20+0430",
        CompletionDate: ""
    }]

const ComponentDeteailCustome = (props) => {
    {/*className={classes.card}*/
    }
    {/*className={classes.title}*/
    }
    {/*className={classes.pos}*/
    }
    const useStyles = makeStyles(theme => ({
        card: {
            maxWidth: 400,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        actions: {
            display: 'flex',
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: 'red',
        },
    }));
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    function handleExpandClick() {
        setExpanded(!expanded);
    }
    const [ShowSubProccess, setShowSubProccess] = React.useState(false);
    const {item} = props;
    return (
        <Card style={{maxHeight:230,maxWidth:230}}>
            <CardContent >
                <Grid xs={12} spacing={10} container>
                    <Grid xs={4}>
                        <Typography color="textSecondary" gutterBottom>
                            وضعیت:
                        </Typography></Grid>
                    <Grid xs={8}>
                        <Typography color="textPrimary" component={"h6"} gutterBottom>{item.Status}</Typography>
                    </Grid>
                    {item.FlowElementType !== "EVENT" ?
                        <Grid xs={6}>
                            <Typography color="textSecondary" gutterBottom>
                                مشارکت کنندگان:
                            </Typography></Grid> : null}
                    {item.FlowElementType !== "EVENT" ?
                        <Grid xs={6}>
                            <Typography color="textPrimary" component={"h6"}
                                        gutterBottom>{item.Participants}</Typography>
                        </Grid> : null}

                    <Grid xs={4}>
                        <Typography color="textSecondary" gutterBottom>
                            تاریخ ایجاد:
                        </Typography></Grid>

                    {item.children.length > 0 ?
                        <Grid xs={12}>
                            <IconButton onClick={() => {
                                setShowSubProccess(!ShowSubProccess);
                            }}>
                                <Slideshow  style={{width:40,height:30}}/>
                            </IconButton>
                            {(ShowSubProccess ?

                                <CustomeDiagram items={item.children}/>
                                : null)}
                        </Grid> : null
                    }

                    <Grid xs={8}>
                        <Typography color="textPrimary" component={"h6"}
                                    gutterBottom>{moment(new Date(item.CreationDate)).locale('fa').format('YYYY/MM/DD HH:mm')}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton
                    className={classnames(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Show more"
                >
                    <ExpandMore style={{width:30,height:20}} fontSize={"small"}/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Grid xs={12} spacing={10} container>
                        <Grid xs={6}>
                            <Typography color="textSecondary" gutterBottom>
                                منقضی شده؟:
                            </Typography></Grid>
                        <Grid xs={6}>
                            <Typography color="textPrimary" component={"h6"} gutterBottom>{item.IsOverdue}</Typography>
                        </Grid>

                        <Grid xs={6}>
                            <Typography color="textSecondary" gutterBottom>
                                زمان پاسخگویی:
                            </Typography></Grid>
                        <Grid xs={6}>
                            <Typography color="textPrimary" component={"h6"}
                                        gutterBottom>{item.ActivityLeadTime}</Typography>
                        </Grid>

                        <Grid xs={6}>
                            <Typography color="textSecondary" gutterBottom>
                                تعداد تکرار:
                            </Typography></Grid>
                        <Grid xs={6}>
                            <Typography color="textPrimary" component={"h6"}
                                        gutterBottom>{item.ActivityLoopCnt}</Typography>
                        </Grid>

                        <Grid xs={6}>
                            <Typography color="textSecondary" gutterBottom>
                                تعداد تلاش مجدد:
                            </Typography></Grid>
                        <Grid xs={6}>
                            <Typography color="textPrimary" component={"h6"} gutterBottom>{item.RetryCount}</Typography>
                        </Grid>

                        <Grid xs={6}>
                            <Typography color="textSecondary" gutterBottom>
                                تاریخ تکمیل:
                            </Typography></Grid>
                        <Grid xs={6}>
                            <Typography color="textPrimary" component={"h6"}
                                        gutterBottom>{item.WICompletionDate}</Typography>
                        </Grid>

                        <Grid xs={6}>
                            <Typography color="textSecondary" gutterBottom>
                                خروجی:
                            </Typography></Grid>
                        <Grid xs={6}>
                            <Typography color="textPrimary" component={"h6"} gutterBottom>{item.Outcome}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Collapse>
        </Card>
    );
}
const ComponentHeaderCustome = (props) => {
    switch (props.item.FlowElementType.toUpperCase()) {
        case "ACTIVITY":
            return <Typography style={{fontWeight: 'bold'}} color={"textPrimary"} gutterBottom><InfoOutlined
                titleAccess={"فعالیت"} style={{color: "#1769ec", fontSize: 40}}/>{props.item.ActivityLabel}
            </Typography>;
        case "EVENT":
            return <Typography style={{fontWeight: 'bold'}} color={"textPrimary"} gutterBottom><ErrorOutline
                titleAccess={"رویداد"} style={{color: "#d59800", fontSize: 5}}/>{props.item.ActivityLabel}</Typography>;
        default:
            return <Typography>{props.ActivityLabel}{props.item.FlowElementType}</Typography>

    }
}

class CustomeDiagram extends React.Component {
    componentWillMount() {
        if(this.props.items.length>0){
            this.eng = this.genrateNode(this.props.items);
        }
    }

    genrateNode = (items) => {
        var engine = new DiagramEngine();
        engine.registerNodeFactory(new DefaultNodeFactory());
        engine.registerLinkFactory(new DefaultLinkFactory());
        const model = new DiagramModel();

        var beforePort = null;
        items.map((item, index) => {
            const node = new DefaultNodeModel( <ComponentHeaderCustome item={item}/>, item.FlowElementType === "EVENT" ? '#6fff15' : "#ff36f5");
            node.x = 2 * index;
            node.y = 260 * index;
            const port = node.addPort(new DefaultPortModel(false,<ComponentDeteailCustome item={item}/>));
            const link = new LinkModel();
            if (beforePort) {
                link.setSourcePort(beforePort);
                link.setTargetPort(port);
            }
            model.addNode(node);
            model.addLink(link);
            beforePort = port;
        });

        engine.setDiagramModel(model);
        return engine;
    }

    render() {
        return (
            <div>
                <DiagramWidget diagramEngine={this.eng}/>
            </div>
        );
    }
}

export default CustomeDiagram;