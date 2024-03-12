import classNames from 'classnames';
import styles from './profile.module.scss';
import { useEffect, useState } from 'react';
import Userfront from '@userfront/toolkit/react';
import { LogoutButton } from '../logout-button/logout-button';

export interface ProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profile = ({ className }: ProfileProps) => {

    const [privateHabboUser, setprivateHabboUser] = useState(null);
    const [userPhotos, setUserPhotos] = useState([]);

    useEffect(() => {
        const fetchHabboUser = async (username: string) => {
            try {
                const response = await fetch(`https://www.habbo.com/api/public/Users?name=${Userfront.user.name}`);
                const data = await response.json();
                setprivateHabboUser(data);
            } catch (error) {
                console.error('Error fetching Habbo user:', error);
                setprivateHabboUser(null);
            }
        };

        fetchHabboUser(Userfront.user.name);
    }, []);

    useEffect(() => {
        const fetchUserPhotos = async () => {
            if (privateHabboUser && privateHabboUser.uniqueId) {
                try {
                    const response = await fetch(
                        `https://www.habbo.com/extradata/public/users/${privateHabboUser.uniqueId}/photos`
                    );
                    const photos = await response.json();
                    setUserPhotos(photos);
                    console.log(photos);
                } catch (error) {
                    console.error('Failed to fetch user photos:', error);
                    setUserPhotos([]);
                }
            }
        };

        fetchUserPhotos();
    }, [privateHabboUser]);

    if (publicHabboUser) {

        return (
            <>
                <h1>{publicHabboUser.user?.name}</h1>
                <div>User ID: {publicHabboUser.user.uniqueId}</div>
                <div>
                    Profile Hidden: {publicHabboUser.profileVisible ? 'No' : 'Yes'}
                </div>
                <div>Online: {publicHabboUser.user.online ? 'Yes' : 'No'}</div>
                <div>
                    Last Login:{' '}
                    {new Date(
                        publicHabboUser.user.lastAccessTime
                    ).toLocaleString()}
                </div>
                <div>Current Level: {publicHabboUser.user.currentLevel}</div>
                <div>Total Experience: {publicHabboUser.user.totalExperience}</div>
                <div>Star Gem Count: {publicHabboUser.user.starGemCount}</div>
                <div>
                    Current Level Complete:{' '}
                    {`${Math.round(
                        publicHabboUser.user?.currentLevelCompletePercent || 0
                    )}%`}
                </div>

                <img
                    src={`https://www.habbo.com/habbo-imaging/avatarimage?user=${publicHabboUser.user?.name}&direction=3&head_direction=3&gesture=nor&action=wav&size=l&format=.gif`}
                    alt=""
                />
                <div>Motto: {publicHabboUser.user.motto}</div>
                <div>
                    Member Since:{' '}
                    {new Date(publicHabboUser.user.memberSince).toLocaleString()}
                </div>
                <div>
                    {publicHabboUser.user.selectedBadges &&
                        publicHabboUser.user.selectedBadges[0] && (
                            <img
                                src={`http://images.habbo.com/c_images/album1584/${publicHabboUser.user.selectedBadges[0].code}.gif`}
                                alt=""
                            />
                        )}
                    {publicHabboUser.user.selectedBadges &&
                        publicHabboUser.user.selectedBadges[1] && (
                            <img
                                src={`http://images.habbo.com/c_images/album1584/${publicHabboUser.user.selectedBadges[1].code}.gif`}
                                alt=""
                            />
                        )}
                    {publicHabboUser.user.selectedBadges &&
                        publicHabboUser.user.selectedBadges[2] && (
                            <img
                                src={`http://images.habbo.com/c_images/album1584/${publicHabboUser.user.selectedBadges[2].code}.gif`}
                                alt=""
                            />
                        )}
                    {publicHabboUser.user.selectedBadges &&
                        publicHabboUser.user.selectedBadges[3] && (
                            <img
                                src={`http://images.habbo.com/c_images/album1584/${publicHabboUser.user.selectedBadges[3].code}.gif`}
                                alt=""
                            />
                        )}
                    {publicHabboUser.user.selectedBadges &&
                        publicHabboUser.user.selectedBadges[4] && (
                            <img
                                src={`http://images.habbo.com/c_images/album1584/${publicHabboUser.user.selectedBadges[4].code}.gif`}
                                alt=""
                            />
                        )}
                </div>
                <h4>User Photos:</h4>

                <div className={styles.photosGrid}>
                    {userPhotos.map((photo, index) => (
                        <div className={styles.photo}>
                            <img
                                key={index}
                                src={photo.previewUrl}
                                alt={`User Photo ${index + 1}`}
                            />
                            <div className={styles.photoDesc}>
                                <div className={styles.photoCreator}>
                                    <img
                                        src={`https://www.habbo.com/habbo-imaging/avatarimage?user=${photo.creator_name}&headonly=1&size=b&gesture=sml&direction=2&head_direction=2&action=std`}
                                        alt=""
                                    />
                                    <h6>{photo.creator_name}</h6>
                                </div>

                                <p>Likes: {photo.likes.length}</p>
                            </div>
                            <h7 className={styles.photoDate}>
                                {new Date(photo.time).toLocaleString()}
                            </h7>
                        </div>
                    ))}
                </div>

            </>
        );

    }

    if (privateHabboUser && !privateHabboUser.profileVisible) {
        return (
            <>
                <div>
                    <h2>Profile</h2><LogoutButton />
                </div>
                <div>
                    <img
                        src={`https://www.habbo.com/habbo-imaging/avatarimage?user=${privateHabboUser?.name}&direction=3&head_direction=3&gesture=nor&action=wav&size=l&format=.gif`}
                        alt=""
                    />
                </div>
                <div>
                    <h1>{privateHabboUser?.name}</h1>
                </div>
                <div>User ID: {privateHabboUser?.uniqueId}</div>
                <div>
                    Profile Hidden: {privateHabboUser?.profileVisible ? 'No' : 'Yes'}
                </div>
                <div>Motto: {privateHabboUser?.motto}</div>
                <div>
                    Member Since:{' '}
                    {new Date(privateHabboUser?.memberSince).toLocaleString()}
                </div>
                <div>
                    {privateHabboUser?.selectedBadges && privateHabboUser?.selectedBadges[0] && (
                        <img
                            src={`http://images.habbo.com/c_images/album1584/${privateHabboUser?.selectedBadges[0].code}.gif`}
                            alt=""
                        />
                    )}
                    {privateHabboUser?.selectedBadges && privateHabboUser?.selectedBadges[1] && (
                        <img
                            src={`http://images.habbo.com/c_images/album1584/${privateHabboUser?.selectedBadges[1].code}.gif`}
                            alt=""
                        />
                    )}
                    {privateHabboUser?.selectedBadges && privateHabboUser?.selectedBadges[2] && (
                        <img
                            src={`http://images.habbo.com/c_images/album1584/${privateHabboUser?.selectedBadges[2].code}.gif`}
                            alt=""
                        />
                    )}
                    {privateHabboUser?.selectedBadges && privateHabboUser?.selectedBadges[3] && (
                        <img
                            src={`http://images.habbo.com/c_images/album1584/${privateHabboUser?.selectedBadges[3].code}.gif`}
                            alt=""
                        />
                    )}
                    {privateHabboUser?.selectedBadges && privateHabboUser?.selectedBadges[4] && (
                        <img
                            src={`http://images.habbo.com/c_images/album1584/${privateHabboUser?.selectedBadges[4].code}.gif`}
                            alt=""
                        />
                    )}
                </div>

                <div>
                    <h4>User Photos:</h4>
                </div>

                <div>
                    <section className={styles.photosGrid}>
                        {userPhotos.map((photo, index) => (
                            <div key={index} className={styles.photo}>
                                <img
                                    src={photo.previewUrl}
                                    alt={`User Photo ${index + 1}`}
                                />
                            </div>
                        ))}
                    </section>
                </div>
            </>
        );
    }
};
