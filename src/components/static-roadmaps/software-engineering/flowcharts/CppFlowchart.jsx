import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useNavigate } from 'react-router-dom';

const CppFlowchart = () => {
  const navigate = useNavigate();
  const svgRef = useRef();
  const [activeNode, setActiveNode] = useState(null);
  const [dimensions] = useState({ width: 1200, height: 1500 });

  // Add this function to handle node clicks
  const handleNodeClick = (node) => {
    // Convert node label to URL-friendly format
    const topicSlug = node.label
      .toLowerCase()
      .replace(/\+\+/g, 'pp')  // Handle C++ -> cpp
      .replace(/[^a-z0-9]+/g, '-')  // Replace spaces and special chars with hyphens
      .replace(/^-+|-+$/g, '');  // Remove leading/trailing hyphens
    
    // For debugging
    console.log('Node Label:', node.label);
    console.log('Topic Slug:', topicSlug);
    
    navigate(`/roadmap/software-engineer/cpp/${topicSlug}`);
  };

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Data structure for the roadmap with removed nodes and reordered connection
    const nodes = [
      { id: 0, label: "C++ Basics", level: "Beginner" },
      { id: 1, label: "Pattern Questions", level: "Beginner" },
      { id: 2, label: "Basic Maths", level: "Beginner" },
      { id: 3, label: "Functions", level: "Beginner" },
      { id: 4, label: "Basic Recursion", level: "Intermediate" },
      { id: 5, label: "STL", level: "Intermediate" },
      { id: 6, label: "Basic Arrays", level: "Intermediate" },
      { id: 7, label: "Basic Hashing", level: "Intermediate" },
      { id: 8, label: "Basic Strings", level: "Intermediate" },
      { id: 9, label: "Sorting", level: "Intermediate" },
      { id: 10, label: "Binary Search", level: "Intermediate" },
      { id: 11, label: "Linked List", level: "Advanced" },
      { id: 12, label: "Bit Manipulation", level: "Advanced" },
      { id: 13, label: "Greedy Algorithms", level: "Advanced" },
      { id: 14, label: "Sliding Window/2 Pointer", level: "Advanced" },
      { id: 15, label: "Stack/Queues", level: "Advanced" },
      { id: 16, label: "Heaps", level: "Advanced" },
      { id: 17, label: "Binary Trees", level: "Expert" },
      { id: 18, label: "Binary Search Trees", level: "Expert" },
      { id: 19, label: "Graphs", level: "Expert" },
      { id: 20, label: "Dynamic Programming", level: "Expert" },
      { id: 21, label: "Tries", level: "Expert" },
      { id: 22, label: "Advance Strings", level: "Expert" },
      { id: 23, label: "Maths for CP", level: "Expert" }
    ];

    const links = nodes.slice(0, -1).map((node, index) => ({
      source: index,
      target: index + 1
    }));

    // SVG dimensions and margins
    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    // Create SVG container with fixed width
    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Node dimensions (now fixed regardless of screen size)
    const nodeWidth = 200;
    const nodeHeight = 40;
    const horizontalSpacing = nodeWidth * 1.7;
    const verticalSpacing = nodeHeight * 2.5;
    const nodesPerRow = 3;

    nodes.forEach((node, i) => {
      const row = Math.floor(i / nodesPerRow);
      const col = i % nodesPerRow;
      
      // If row is odd, reverse the column order to create snake pattern
      const adjustedCol = row % 2 === 0 ? col : (nodesPerRow - 1 - col);
      
      // Add controlled randomness to both x and y positions
      const randomX = (Math.random() - 0.5) * (horizontalSpacing * 0.25);
      const randomY = (Math.random() - 0.5) * (verticalSpacing * 0.4);
      
      // Calculate base position with sine wave offset for more organic flow
      const sineOffset = Math.sin(row * 0.5) * (horizontalSpacing * 0.15);
      
      // Calculate final positions with a slight left offset
      node.x = (adjustedCol * horizontalSpacing) + randomX + sineOffset - (horizontalSpacing * 0.1);
      node.y = (row * verticalSpacing) + randomY;
    });

    // After calculating all node positions, scale them to fit the container
    const xExtent = d3.extent(nodes, d => d.x);
    const yExtent = d3.extent(nodes, d => d.y);
    const xScale = d3.scaleLinear()
      .domain([xExtent[0], xExtent[1] + nodeWidth])
      .range([0, width - 20]);
    const yScale = d3.scaleLinear()
      .domain([yExtent[0], yExtent[1] + nodeHeight])
      .range([0, height]);

    // Apply scaling to node positions
    nodes.forEach(node => {
      node.x = xScale(node.x);
      node.y = yScale(node.y);
    });

    // Draw the links with gradient
    const gradient = svg.append("defs")
      .selectAll("linearGradient")
      .data(links)
      .enter()
      .append("linearGradient")
      .attr("id", (d, i) => `gradient-${i}`)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", d => nodes[d.source].x + nodeWidth/2)
      .attr("y1", d => nodes[d.source].y + nodeHeight/2)
      .attr("x2", d => nodes[d.target].x + nodeWidth/2)
      .attr("y2", d => nodes[d.target].y + nodeHeight/2);

    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#0891b2");

    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#0e7490");

    // Draw curved links
    svg.selectAll("path.link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", d => {
        const sourceX = nodes[d.source].x + nodeWidth/2;
        const sourceY = nodes[d.source].y + nodeHeight/2;
        const targetX = nodes[d.target].x + nodeWidth/2;
        const targetY = nodes[d.target].y + nodeHeight/2;
        
        // Calculate control points for organic curves
        const dx = targetX - sourceX;
        const dy = targetY - sourceY;
        
        // Add slight curve variation based on position
        const curveVariation = Math.sin(d.source * 0.5) * 50;
        
        return `M${sourceX},${sourceY} 
                C${sourceX + dx/3 + curveVariation},${sourceY + dy/3} 
                  ${sourceX + dx*2/3 - curveVariation},${sourceY + dy*2/3} 
                  ${targetX},${targetY}`;
      })
      .style("stroke", (d, i) => `url(#gradient-${i})`)
      .style("stroke-width", 2)
      .style("fill", "none")
      .style("opacity", 0.5)
      .attr("marker-end", "url(#arrowhead)");

    // Add arrowhead marker
    svg.append("defs").append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "-10 -10 20 20")
      .attr("refX", 15)
      .attr("refY", 0)
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M-6,-6 L 0,0 L -6,6")
      .style("fill", "#0891b2");

    // Draw the nodes
    const nodeGroups = svg.selectAll("g.node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .style("cursor", "pointer") // Add pointer cursor
      .on("mouseover", (event, d) => {
        setActiveNode(d.id);
        d3.select(event.currentTarget)
          .transition()
          .duration(200)
          .attr("transform", d => `translate(${d.x},${d.y}) scale(1.05)`);
      })
      .on("mouseout", (event, d) => {
        setActiveNode(null);
        d3.select(event.currentTarget)
          .transition()
          .duration(200)
          .attr("transform", d => `translate(${d.x},${d.y}) scale(1)`);
      })
      .on("click", (event, d) => handleNodeClick(d)); // Add click handler

    // Node background with glass effect
    nodeGroups.append("rect")
      .attr("width", nodeWidth)
      .attr("height", nodeHeight)
      .attr("rx", 8)
      .attr("ry", 8)
      .style("fill", d => {
        const colors = {
          "Beginner": "rgba(6, 182, 212, 0.1)",
          "Intermediate": "rgba(14, 165, 233, 0.1)",
          "Advanced": "rgba(99, 102, 241, 0.1)",
          "Expert": "rgba(168, 85, 247, 0.1)"
        };
        return colors[d.level];
      })
      .style("stroke", d => {
        const colors = {
          "Beginner": "#06b6d4",
          "Intermediate": "#0ea5e9",
          "Advanced": "#6366f1",
          "Expert": "#a855f7"
        };
        return colors[d.level];
      })
      .style("stroke-width", 2)
      .style("filter", "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))");

    // Adjust text size for mobile
    nodeGroups.append("text")
      .attr("x", nodeWidth / 2)
      .attr("y", nodeHeight / 2)
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "14px")
      .style("font-weight", "500")
      .text(d => d.label);

    // Adjust level indicator text size
    nodeGroups.append("text")
      .attr("x", nodeWidth / 2)
      .attr("y", -8)
      .attr("text-anchor", "middle")
      .style("fill", d => {
        const colors = {
          "Beginner": "#06b6d4",
          "Intermediate": "#0ea5e9",
          "Advanced": "#6366f1",
          "Expert": "#a855f7"
        };
        return colors[d.level];
      })
      .style("font-size", "12px")
      .style("font-weight", "500")
      .text(d => d.level);

  }, [navigate]);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl border border-gray-700">
      <div className="overflow-x-auto">
        <div className="min-w-[1200px]">
          <svg ref={svgRef} className="mx-auto"></svg>
        </div>
      </div>
    </div>
  );
};

export default CppFlowchart; 