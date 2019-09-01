import {SUB_SYSTEM} from "./constans";


const Routes = [

    {
        title: "title",
        id: 1,
        path: SUB_SYSTEM + "/dashboard",
        type: 'dashboard',
        title: "مدیریت اطلاعات پایه",
        icon: mdilFolderMultiple,
        component: DashboardPage,
        children: [
            {
                title: "sub dashboard",
                id: 3,
                path: SUB_SYSTEM_CONTEXT + "/signIn",
                type: 'dashboard',
                name: "ورود",
                icon: FolderOpen,
                component: UserProfile
            },
            {
                title: "مدیریت اطلاعات کاربر",
                id: 5,
                path: SUB_SYSTEM_CONTEXT + "/pages/user/:accessToken?",
                type: 'pages',
                name: "مدیریت اطلاعات کاربر",
                icon: FolderOpen,
                component: UserProfile
            }
        ]
    },
    {
        title: "درخواست وام",
        id: 15,
        path: SUB_SYSTEM_CONTEXT + "/pages/loanRequest/:flowId/:taskId",
        type: 'pages',
        name: "درخواست وام",
        icon: FolderOpen,
        component: BIZINXLoanRequest
    },
    {
        title: "پیگیری وام",
        id: 16,
        path: SUB_SYSTEM_CONTEXT + "/pages/loanResponse/:flowId/:taskId",
        type: 'pages',
        name: "پیگیری وام",
        icon: FolderOpen,
        component: BIZINXLoanResponse
    },
    {
        title: "درخواست اندازه گیری",
        id: 20,
        path:SUB_SYSTEM_CONTEXT+"/pages/ReqApplicant/:flowId/:taskId",
        type: 'pages',
        name: "درخواست اندازه گیری",
        icon: FolderOpen,
        component: BIZINXReqApplicant
    },
    {
        title: "تایید توسط مدیر واحد",
        id: 21,
        path: SUB_SYSTEM_CONTEXT + "/pages/Verify/:flowId/:taskId",
        type: 'pages',
        name: "تایید توسط مدیر واحد",
        icon: FolderOpen,
        component: BIZINXVerifyUnitManager
    },
    {
        title: "تعیین کارشناس",
        id: 22,
        path: SUB_SYSTEM_CONTEXT + "/pages/DetermineExp/:flowId/:taskId",
        type: 'pages',
        name: "تعیین کارشناس",
        icon: FolderOpen,
        component: BIZINXDetermineExpert
    },
    {
        title: "تایید توسط کارشناس",
        id: 23,
        path: SUB_SYSTEM_CONTEXT + "/pages/VerifyExp/:flowId/:taskId",
        type: 'pages',
        name: "تایید توسط کارشناس",
        icon: FolderOpen,
        component: BIZINXVerifyExpert
    },
    {
        id: 24,
        title: "اعلان به مدیر واحد",
        path: SUB_SYSTEM_CONTEXT + "/pages/FYI/:flowId/:taskId",
        type: 'pages',
        name: "اعلان به مدیر واحد",
        icon: FolderOpen,
        component: BIZINXFYIUnitManager
    },
    {
        title: "درخواست سم پاشی",
        id: 9,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT +  "/pages/submitReq/:flowId/:taskId",
        name: "درخواست سم پاشی",
        icon: FolderOpen,
        component: BIZINXSubmitRequestSpraying
    },
    {
        title: "گزارشات",
        id: 118,
        type: 'report',
        path: SUB_SYSTEM_CONTEXT +"/dashboard/reportViewer",
        name: "گزارشات",
        icon: Report,
        component:IbxReportViewer
    },
    {
        title: "تاييد سم پاشی",
        id: 10,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT + "/pages/confirmReq/:flowId/:taskId",
        name: "تاييد سم پاشی",
        icon: FolderOpen,
        component: BIZINXConfirmRequestSpraying
    },
    {
        title: "نحوه اجرای سم پاشی",
        id: 11,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT + "/pages/detMethodReq/:flowId/:taskId",
        name: "نحوه اجرای سم پاشی",
        icon: FolderOpen,
        component: BIZINXDetMethodRequestSpraying
    },
    {
        title: "ثبت اثر بخشی سم پاشی",
        id: 12,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT + "/pages/saveResReq/:flowId/:taskId",
        name:"ثبت اثر بخشی سم پاشی",
        icon: FolderOpen,
        component: BIZINXSaveResultRequestSpraying
    },
    {
        title: "نمايش سم پاشی",
        id: 13,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT + "/pages/viewReq/:flowId/:taskId",
        name: "نمايش سم پاشی",
        icon: FolderOpen,
        component: BIZINXViewRequestSpraying
    },
    {
        title: "بررسی نتيجه اثر بخشی ",
        id: 14,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT + "/pages/verifyResultReq/:flowId/:taskId",
        name:  "بررسی نتيجه اثر بخشی ",
        icon: FolderOpen,
        component: BIZINXVerifyResultExpertRequestSpraying
    },
    {
        title: "اطلاع از رد درخواست ",
        id: 14,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT + "/pages/fyiResultReq/:flowId/:taskId",
        name:   "اطلاع از رد درخواست ",
        icon: FolderOpen,
        component: BIZINXFYIRequestSpraying
    },
    {
        title: "چک لیست ",
        id: 25,
        type: 'dashboard',
        path:SUB_SYSTEM_CONTEXT + "/dashboard/defineChecklist",
        name:   "چک لیست ",
        icon: FolderOpen,
        component: BIZDefineChecklist
    },
    {
        title: "چک لیست ",
        id: 26,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT + "/pages/defineChecklist",
        name:   "چک لیست ",
        icon: FolderOpen,
        component: BIZDefineChecklist
    },
    {
        title: "تعریف سوال ",
        id: 27,
        type: 'dashboard',
        path:SUB_SYSTEM_CONTEXT + "/dashboard/defineQuestion",
        name:   "تعریف سوال ",
        icon: FolderOpen,
        component: BIZDefineQuestion
    },
    {
        title: "تعریف سوال ",
        id: 28,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT + "/pages/defineQuestion",
        name:   "تعریف سوال ",
        icon: FolderOpen,
        component: BIZDefineQuestion
    },
    {
        title: "تعریف گزینه ",
        id: 29,
        type: 'dashboard',
        path:SUB_SYSTEM_CONTEXT + "/dashboard/defineOptions",
        name:   "تعریف گزینه ",
        icon: FolderOpen,
        component: BIZDefineOptions
    },
    {
        title: "تعریف گزینه ",
        id: 30,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT + "/pages/defineOptions",
        name:   "تعریف گزینه ",
        icon: FolderOpen,
        component: BIZDefineOptions
    }, {
        title: "timeline ",
        id: 31,
        type: 'dashboard',
        path:SUB_SYSTEM_CONTEXT + "/dashboard/timeline",
        name:   "timeline",
        icon: FolderOpen,
        component: BizSecTimeline
    },
    {
        title: "timeline",
        id: 32,
        type: 'pages',
        path:SUB_SYSTEM_CONTEXT + "/pages/timeline",
        name:   "timeline",
        icon: FolderOpen,
        component: BizSecTimeline
    },
    {
        title: "dashboard",
        id: 4, redirect: true, path: SUB_SYSTEM_CONTEXT + "/", to: SUB_SYSTEM_CONTEXT + "/dashboard"
    }
];

export default Routes;