noseX=0;
noseY=0;
function preload()
{
mustache = loadImage('https://i.postimg.cc/pXyb3ty2/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTA5-L3-Jhd3-Bpe-GVs-X29m-Zmlj-ZV8y-NF9jd-XJse-V9ib-GFja19td-XN0-YWNo-ZV9p.webp');
lipstick = loadImage('https://i.postimg.cc/HxWW8zDW/lipstick.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw()
{
image(video, 0, 0, 300, 300);
image(mustache, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

