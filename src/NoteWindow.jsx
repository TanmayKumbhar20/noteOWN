import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './App.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { useState } from 'react';
// const imagesContext = require.context('./assets/images/', false, /\.(jpg)$/);
function NoteWindow() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            isCompleted: false,
            task: 'Task one has to be completed'
        },
        {
            id: 2,
            isCompleted: true,
            task: 'Task two is completed'
        },
        {
            id: 3,
            isCompleted: false,
            task: 'Another task to do'
        },
        {
            id: 4,
            isCompleted: false,
            task: 'Finish the project'
        },
        {
            id: 5,
            isCompleted: true,
            task: 'Task two is completed'
        },
        {
            id: 6,
            isCompleted: false,
            task: 'Another task to do'
        },
        {
            id: 7,
            isCompleted: false,
            task: 'Finish the project'
        }
    ])
    const [notes, setNotes] = useState([
        {
            id: 1,
            name: 'note 1',
            category: 'college',
            image: ""
        },
        {
            id: 2,
            name: 'note 2',
            category: 'work',
            image: ""
        },
        {
            id: 3,
            name: 'note 3',
            category: 'personal',
            image: ""
        },
        {
            id: 4,
            name: 'note 4',
            category: 'shopping',
            image: ""
        },
        {
            id: 5,
            name: 'note 5',
            category: 'health',
            image: ""
        },
        {
            id: 6,
            name: 'note 6',
            category: 'project',
            image: ""
        },
        {
            id: 7,
            name: 'note 7',
            category: 'events',
            image: ""
        },
        {
            id: 8,
            name: 'note 8',
            category: 'goals',
            image: ""
        }
    ]
    )

    // function handleTodo(id) {
    //     // const test = todo.map((el) => (el.id === id ? { ...el, isCompleted: !el.isCompleted } : el));

    //     const newTodo = todo.map((el) => (el.id === id ? { ...el, isCompleted: ![el.isCompleted] } : el));
    //     console.log(newTodo);
    //     setTodo(newTodo);
    //   }

    function handleTodo(id) {
        // event.preventDefault();
        const newTodo = todo.map((el) => (el.id === id ? { ...el, isCompleted: !el.isCompleted } : el));
        console.log('New Todo:', newTodo);
        setTodo(newTodo);
    }




    return (
        <>
            <div className="h-full w-full flex flex-col p-4" style={{ backgroundColor: '#141527' }}> {/**main frame for notewindow */}
                <div className="space-x-4 flex flex-row h-3/4"> {/**frame for partition divs */}
                    <div className="bg-blac h-full w-3/5 overflow-hidden">{/** partition div left side */}
                        <div className=''>{/**create new note */}
                            <Button variant="contained" style={{ backgroundColor: '#8201ff', padding: '1%' }} className='h-8 w-26'>
                                <AddIcon />
                                Create</Button>
                        </div>
                        <div className='h-14 w-full mt-3 flex flex-row'> {/** welcome mssg */}
                            <h2 className='text-4xl' style={{ color: '#76799e' }}>Welcome,</h2>
                            <h2 className='text-4xl ' style={{ color: '#fdfeff' }}>Tanmay</h2>
                        </div>
                        <div className='w-full h-24 overflow-hidden flex flex-col'>{/**div for Category */}
                            <div className='h-8 w-full'>{/**div for text:category */}
                                <h6 className='text-white h-8'>Category</h6></div>
                            <div className='h-16 w-full flex flex-row space-x-2'>{/**categories */}
                                <div className=' h-16 w-48 rounded-md' style={{ backgroundColor: '#1d1f36' }}><p className='text-color-sideBar ml-2'>Note Category 1</p><p className='ml-2 text-2xl text-white'>20000</p></div>
                                <div className=' h-16 w-48 rounded-md' style={{ backgroundColor: '#1d1f36' }}><p className='text-color-sideBar ml-2'>Note Category 2</p><p className='ml-2 text-2xl text-white'>20000</p></div>
                                <div className=' h-16 w-48 rounded-md' style={{ backgroundColor: '#1d1f36' }}><p className='text-color-sideBar ml-2'>Note Category 3</p><p className='ml-2 text-2xl text-white'>20000</p></div>
                                <div className=' h-16 w-48 rounded-md' style={{ backgroundColor: '#1d1f36' }}><p className='text-color-sideBar ml-2'>Note Category 4</p><p className='ml-2 text-2xl text-white'>20000</p></div>

                            </div>{/**end of categories */}

                        </div>
                        <div className='h-28 w-full rounded-xl mt-3 flex flex-row space-x-4' style={{ backgroundColor: '#8201ff', padding: '1%' }}>{/*main frame -quote of the day*/}
                            <div>{/**div for circle holding coffee */}
                                <div className='rounded-full h-24 w-24  flex place-content-center items-center' style={{ backgroundColor: '#7806e6' }}>{/**outer circle */}
                                    <div className='rounded-full h-20 w-20  flex place-content-center items-center' style={{ backgroundColor: '#6607c3' }}>{/**inner circle */}
                                        <FormatQuoteIcon fontSize='large' style={{ color: 'white' }} /></div>
                                </div>
                            </div>
                            <div className='w-full items-center flex'>{/**div for quote */}
                                <em className='text-lg text-white'>"you have to do by yourself only , you can uplift your self and there's always you have chance to restart your life"</em>
                            </div>

                        </div>
                        <div className='mt-5 w-full rounded-xl p-2 relative space-y-4' style={{ backgroundColor: '#1d1f36' ,height:'184px'}}>{/**to-do list */}
                            <div className='h-4 w-full flex flex-row space-x-2'>{/**div for heading */}
                                <ChecklistIcon style={{ color: 'white' }} className='' />
                                <h6 className='text-white'>TO-DO</h6>
                            </div>
                            <div className='scrollable-div absolute w-full h-36 pb-1'>{/**div for to-dos */}

                                <FormGroup>
                                    {todo.map((el) => (
                                        <FormControlLabel className={el.isCompleted ? 'line-through' : ''} control={<Checkbox style={{ color: '#8201ff' }} checked={el.isCompleted} />} label={el.task} style={{ color: '#76799e' }} onChange={() => handleTodo(el.id)} />
                                    ))}
                                    {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" style={{color:'white'}}/> */}
                                    {/* <FormControlLabel control={<Checkbox />} label="Required" /> */}
                                </FormGroup>
                            </div>
                        </div>
                    </div> {/**end- partition left side */}
                    <div className="h-full w-2/5 rounded-xl flex-col scrollable-div p-3" style={{ backgroundColor: '#16192c' }}>{/**partition div right side */}

                        {notes.map((el) => (

                            <div className='flex h-52 mb-1 flex-row w-full justify-between p-1 space-x-2'>{/**div for 2 notes hold */}
                                <div className='h-full w-full rounded-xl' style={{ backgroundColor: '#252944' }}>{/**div for note-card-left */}
                                    <div className='w-full h-4/5'>{/* img div */}
                                        <img className='h-full w-full' src="" alt="" />
                                    </div>
                                    <div className='flex flex-row justify-between p-2'><h6 className='text-white'>{el.name}</h6>
                                        <h5 style={{ color: '#76799e' }}>{el.category}</h5></div>
                                </div>
                                <div className='h-full w-full rounded-xl' style={{ backgroundColor: '#252944' }}>{/**div for note-card-right */}
                                    <div className='w-full h-4/5'>{/* img div */}
                                         <img className='h-full w-full' src="" alt="" />
                                    </div>
                                    <div className='flex flex-row justify-between p-2'><h6 className='text-white'>{el.name}</h6>
                                        <h5 style={{ color: '#76799e' }}>{el.category}</h5></div>
                                </div>
                            </div>
                        ))}




                    </div>
                </div>
                <div className='pt-2'>{/**recent notes */}
                            <div className=' h-20 mb-2 w-full rounded-xl' style={{backgroundColor:'#1d1f36'}}>
                                <img></img>
                                <h5></h5>
                                <h6></h6>
                                <h6></h6>
                                <button></button>
                            </div>
                            <div className=' h-20 mb-2 w-full rounded-xl' style={{backgroundColor:'#1d1f36'}}>
                                <img></img>
                                <h5></h5>
                                <h6></h6>
                                <h6></h6>
                                <button></button>
                            </div>
                </div>

            </div>
        </>
    )
}



export default NoteWindow;