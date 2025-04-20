
const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            image: '/assets/react.svg',
            deployedLink: 'https://googlebooksearch-zieo.onrender.com',
            repoLink: 'https://github.com/AVue00/GoogleBookSearch',
        },
        // {
        //     title: 'Project 2',
        //     image: 'path/to/image2.jpg',
        //     deployedLink: 'link',
        //     repoLink: 'link',
        // },
        // {
        //     title: 'Project 3',
        //     image: 'path/to/image3.jpg',
        //     deployedLink: 'link',
        //     repoLink: 'link',
        // },
        // {
        //     title: 'Project 4',
        //     image: 'path/to/image4.jpg',
        //     deployedLink: 'link',
        //     repoLink: 'link',
        // },
    ];

    return (
        <div>
            {projects.map(project => {
                return(<div>
                    <h2>{project.title}</h2>
                    <a href={project.deployedLink}>Deploy Link</a>
                    <a href={project.repoLink}>Repo Link</a>
                    <img src={project.image}></img>
                </div>)
            })}
        </div>
    )
}

export default Portfolio