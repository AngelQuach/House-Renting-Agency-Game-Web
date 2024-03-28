//set up the dialog format
gamedialog = {
    drawBounds: function(ctx, x, y, width, height, radius){
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;

        //reset the path
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        //draw top length
        ctx.lineTo(x + radius + width, y);
        //draw right top corner
        ctx.arcTo(x + radius + width, y, x + 2*radius + width, y + radius, radius);
        //draw right length
        ctx.lineTo(x + 2*radius + width, y + radius + height);
        //draw right bottom corner
        ctx.arcTo(x + 2*radius + width, y + radius + height, x + radius + width, y + 2*radius + height, radius);
        //draw bottom length
        ctx.lineTo(x + radius, y + 2*radius + height);
        //draw left bottom corner
        ctx.arcTo(x + radius, y + 2*radius + height, x, y + radius + height, radius);
        //draw left length
        ctx.lineTo(x, y + radius);
        //draw left top corner
        ctx.arcTo(x, y + radius, x + radius, y, radius);
        ctx.closePath();

        //fill the window with color
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    }
}
