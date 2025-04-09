import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause, Shuffle, SkipBack, SkipForward, Repeat, VolumeX, Volume1, Volume2, Volume } from 'lucide-react';
import styles from './Player.module.css';

export default function Player() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [previousVolume, setPreviousVolume] = useState(1);

    const togglePlay = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }

        setIsPlaying(!isPlaying);
    }, [isPlaying]);

    const handleTimeChange = (e) => {
        const newTime = Number(e.target.value);
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    }

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return '00:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const getVolumeIcon = () => {
        if (volume === 0) return <VolumeX size={20} />
        if (volume <= 0.4) return <Volume size={20} />
        if (volume <= 0.7) return <Volume1 size={20} />
        return <Volume2 size={20} />
    }

    const toggleMute = () => {
        if ( volume === 0) {
            setVolume(previousVolume);
            if (audioRef.current) {
                audioRef.current.volume = previousVolume;
            }
        } else {
            setPreviousVolume(volume);
            setVolume(0);
            if (audioRef.current) {
                audioRef.current.volume = 0;
            }
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const tag = e.target.tagName.toLowerCase();
            if (e.code === 'Space' && tag !== 'input' && tag !== 'textarea') {
                e.preventDefault();
                togglePlay();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [togglePlay]);

    return (
        <div className={`${styles.player} ${styles.flex}`}>
            <div className={styles.info}>
                <strong>Nome da Música</strong>
                <span>Artista</span>
            </div>

            <div className={styles.column}>
                <div className={`${styles.playerButtons} ${styles.flex}`}>
                    <button>
                        <Shuffle size={20} />
                    </button>

                    <button>
                        <SkipBack size={20} />
                    </button>

                    <button onClick={togglePlay} className={`${styles.playButton} ${styles.flex}`}>
                        {isPlaying ? <Pause fill='currentColor' size={16} /> : <Play fill='currentColor' size={16} />}
                    </button>
                    <button>
                        <SkipForward size={20} />
                    </button>
                    <button>
                        <Repeat size={20} />
                    </button>
                </div>
                <div className={styles.flex}>
                    <span className={styles.time}>{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={handleTimeChange}
                        className={styles.progress}
                    />
                    <span className={styles.time}>{formatTime(duration)}</span>
                </div>
            </div>

            <div className={`${styles.volumeWrapper} ${styles.flex}`}>
                <button onClick={toggleMute} className={styles.volumeIcon}>
                    {getVolumeIcon()}
                </button>
                <input 
                    type="range" 
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className={styles.volume}
                />
            </div>
            <audio
                ref={audioRef}
                src="/music/test.mp3"
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onLoadedMetadata={() => setDuration(audioRef.current.duration)}
            />
        </div>
    );
}