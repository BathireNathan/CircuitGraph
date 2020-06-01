class CircuitGraph {
  constructor (newOptions) {
    this.options = {
      width: '90vw',
      height: '30vh',
    };
    console.log (this.options);
    $.extend (this.options, newOptions);
    console.log (this.options);
    this.parent = '.container';
    this.buildGraph ();
  }

  buildGraph () {
    this.initailizeContainer ();
    this.addNodes ();
  }

  addNodes () {
    this.node = this.container
      .selectAll ('.node')
      .data (this.options.data.nodes)
      .enter ()
      .append ('g')
      .attr ('class', 'node');
  }

  initailizeContainer () {
    this.svg = d3
      .select (this.parent)
      .append ('svg:svg')
      .attr ('width', this.options.width)
      .attr ('height', this.options.height)
      .style ('background-color', 'red');
    this.container = this.svg.append ('g');
    this.svg.call (
      d3.zoom ().scaleExtent ([0.1, 10]).on ('zoom', function () {
        this.container.attr ('transform', d3.event.transform);
      })
    );
  }
}
