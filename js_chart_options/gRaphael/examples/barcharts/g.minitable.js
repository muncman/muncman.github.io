var mmax = Math.max,
    mmin = Math.min;
/* 
 * P3 Plugin to g.Raphaël for custom bar chart hover.
 */
Raphael.fn.g.miniTable = function (x, y, text, dir, size) {
    dir = dir == null ? 2 : dir > 3 ? 3 : dir;
    size = size || 5;
    text = text || '$9.99';
    var res = this.set(),
        d = 3;
    res.push(this.path().attr({fill: '#fff', stroke: '#000'}));
    res.push(this.text(x, y, text).attr(this.g.txtattr).attr({fill: '#000', 'font-family': 'Helvetica, Arial'}));
    res.update = function (X, Y, withAnimation) {
        X = X || x;
        Y = Y || y;
        var bb = this[1].getBBox(),
            w = bb.width / 2,
            h = bb.height / 2,
            dx = [0, w + size * 2, 0, -w - size * 2],
            dy = [-h * 2 - size * 3, -h - size, 0, -h - size],
            p = ['M', X - dx[dir], Y - dy[dir], 'l', -size, (dir == 2) * -size, -mmax(w - size, 0), 0, 'a', size, size, 0, 0, 1, -size, -size,
                'l', 0, -mmax(h - size, 0), (dir == 3) * -size, -size, (dir == 3) * size, -size, 0, -mmax(h - size, 0), 'a', size, size, 0, 0, 1, size, -size,
                'l', mmax(w - size, 0), 0, size, !dir * -size, size, !dir * size, mmax(w - size, 0), 0, 'a', size, size, 0, 0, 1, size, size,
                'l', 0, mmax(h - size, 0), (dir == 1) * size, size, (dir == 1) * -size, size, 0, mmax(h - size, 0), 'a', size, size, 0, 0, 1, -size, size,
                'l', -mmax(w - size, 0), 0, 'z'].join(','),
            xy = [{x: X, y: Y + size * 2 + h}, {x: X - size * 2 - w, y: Y}, {x: X, y: Y - size * 2 - h}, {x: X + size * 2 + w, y: Y}][dir];
        xy.path = p;
        if (withAnimation) {
            this.animate(xy, 500, '>');
        } else {
            this.attr(xy);
        }
        return this;
    };
    return res.update(x, y);
};
