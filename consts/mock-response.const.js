const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.sendStatus = jest.fn().mockReturnValue(res); 
    return res;
};

module.exports = mockResponse;