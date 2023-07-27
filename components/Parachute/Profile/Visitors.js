import { FaUserPlus } from 'react-icons/fa';


export default function Visitors() {
    return (
        <div className="bg-gray-900 p-8 mr-40 mt-2 rounded-lg text-white">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Profile Views</h5>
                <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a>
            </div>
            <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src="/images/profile-image1.jpeg" alt="card image" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Stephanie Cole
                                </p>
                                <p class="text-sm text-gray-200 truncate dark:text-gray-200">
                                    Engineering Manager
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    stephanie@gmail.com
                                </p>
                            </div>
                            <button className="bg-transparent hover:bg-gray-500 text-white font-bold px-2 py-2 border border-gray-500 hover:border-transparent rounded flex items-center">
                                <FaUserPlus className="mr-2" />
                                Request
                            </button>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src="/images/profile-image2.png" alt="card image" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Brandon Smith
                                </p>
                                <p class="text-sm text-gray-200 truncate dark:text-gray-200">
                                    Vice President
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    brandon.smith@gmail.com
                                </p>
                            </div>
                            <button className="bg-transparent hover:bg-gray-500 text-white font-bold px-2 py-2 border border-gray-500 hover:border-transparent rounded flex items-center">
                                <FaUserPlus className="mr-2" />
                                Request
                            </button>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src="/images/profile-image.jpeg" alt="card image" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Jerry Brians
                                </p>
                                <p class="text-sm text-gray-200 truncate dark:text-gray-200">
                                    BSCS Student
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    jerry.brians@gmail.com
                                </p>
                            </div>
                            <button className="bg-transparent hover:bg-gray-500 text-white font-bold px-2 py-2 border border-gray-500 hover:border-transparent rounded flex items-center">
                                <FaUserPlus className="mr-2" />
                                Request
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}