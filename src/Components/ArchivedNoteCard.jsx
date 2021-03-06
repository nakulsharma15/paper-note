import "./Styles/NoteCard.css";
import { useNote } from "../Contexts/NoteContext";
import { unarchiveNote } from "../Utils/NoteHandler";

export default function ArchivedNoteCard({ Note }) {

    const { noteDetail, setNoteDetail } = useNote();

    const { notes, archiveNotes, trashNotes } = noteDetail;

    const unArchiveHandler = (id) => {

        const findNote = archiveNotes.find((note) => note.id === id);
        unarchiveNote(findNote, setNoteDetail);
    }

    return (
        <div className="note-card" style={{ backgroundColor: Note.color}}>
            <div className="note-card-body">
                <div className="note-title flex-sb-c">
                    <p className="note-title-text bold">{Note.title}</p>
                </div>
                <div className="note-text">
                    <p className="note-text-body">{Note.note}</p>
                </div>
                <div className="note-info flex-sb">
                    <p className="text-s note-label">{Note.label}</p>
                    <p className="text-s note-label">Priority: {Note.priority}</p>
                </div>

                <div className="note-footer flex-sb-c">
                    <p className="text-s"><span className="note-created-text">Created on: </span><span>{Note.date}</span></p>

                    <div className="note-footer-content">

                        <span className="material-icons-outlined note-icons note-footer-icons" onClick={() => unArchiveHandler(Note.id)}>unarchive</span>

                    </div>
                </div>

            </div>

        </div>
    )
}