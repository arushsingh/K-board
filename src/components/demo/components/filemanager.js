import React from 'react';
import '../../demo/components/filemanager.css';

class FileManager extends React.Component {
    render() {
        const Filearray = [
            {
                id: 0,
                name: 'html.js',
                content: 'this is a tetst to check the stte on click '
            },
            {
                id: 1,
                name: 'test.php',
                content: 'this is a tetst to check the stte on click '
            },
            {
                id: 2,
                name: 'tret.py',
                content: 'this is a tetst to check the stte on click '
            },
            {
                id: 3,
                name: 'klkmk.ts',
                content: 'this is a tetst to check the stte on click '
            },
            {
                id: 4,
                name: 'sacalkmk.php',
                content: 'this is a tetst to check the stte on click '
            },
            {
                id: 5,
                name: 'kcaceclkmk.ts',
                content: 'this is a tetst to check the stte on click '
            },
            {
                id: 6,
                name: 'kcaceclkmk.ts',
                content: 'this is a tetst to check the stte on click '
            },
            {
                id: 7,
                name: 'kcaceclkmk.ts',
                content: 'this is a tetst to check the stte on click '
            }
        ]
        const Icons = [
            {
                id: 0,
                icon: 'fab fa-html5',
                name: 'html'
            },
            {
                id: 1,
                icon: 'fab fa-css3-alt',
                name: 'css'
            },
            {
                id: 2,
                icon: 'fab fa-js-square',
                name: 'js'
            },
            {
                id: 3,
                icon: 'fab fa-python',
                name: 'py'
            },
            {
                id: 4,
                icon: 'fab fa-node-js',
                name: 'json'
            },
            {
                id: 5,
                icon: 'fab fa-joomla',
                name: 'ts'
            },
            {
                id: 6,
                icon: 'fab fa-php',
                name: 'php'
            }

        ];

        this.extension = (event) => {
            const dataid = event.currentTarget.getAttribute('id');
            const file = Filearray[dataid];
            const file_name = file.name;
            const ext = file_name.substring(file_name.indexOf('.') + 1);
            for (var i = 0; i < Icons.length; i++) {
                if (ext === Icons[i].name) {
                    console.log(Icons[i].icon);

                }
            }
        }

        this.mapFileData = (file, index) => {
            return (
                <li onClick={this.extension} id={index} ><i className={Icons.icon}></i> {file.name}</li >
            )
        }
        return (
            <div className="file-manager" >
                <div className="file-display-button card">Filemanager</div>
                <div className="file-opener card">
                    <ul className="file_listing">
                        {Filearray.map(this.mapFileData)}
                    </ul>
                </div >
            </div >
        )
    }
}
export default FileManager;
